import User from "../../../../database/schemas/User";

const handler = async (req, res) => {
  if (!req.query.code) {
    res.status(400).send({ message: "No code" });
  }
  const code = req.query.code;

  const clientSecret = process.env.CLIENT_SECRET;
  const clientId = process.env.CLIENT_ID;

  try {
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/api/auth/callback");
    const tokenResponseData = await fetch(
      `https://discord.com/api/v10/oauth2/token`,
      {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const oauthData = await tokenResponseData.json();

    if (tokenResponseData.status !== 200) {
      return await res
        .status(500)
        .send(`Error fetching authorization code from Discord.`);
    }
  } catch (err) {
    console.log(err);
  }

  try {
    const userResult = await fetch(`https://discord.com/api/users/@me`, {
      method: "GET",
      headers: {
        authorization: `${oauthData.token_type} ${oauthData.access_token}`,
      },
    });

    var userData = await userResult.json();

    if (userResult.status !== 200) {
      return await res
        .status(500)
        .send(`Error fetching user data from Discord.`);
    }

    async (accessToken, refreshToken, profile, done) => {
      const { id: discordId } = profile;
      try {
        const existingUser = await User.findOneAndUpdate(
          { discordId },
          { accessToken, refreshToken },
          { new: true }
        );
        if (existingUser) return done(null, existingUser);

        const newUser = new User({ discordId, accessToken, refreshToken });
        const savedUser = await newUser.save();
        return done(null, savedUser);
      } catch (err) {
        console.log(err);
        return done(err, undefined);
      }
    };
  } catch (error) {
    console.error(error);
  }

  await res.redirect("/the-aurora-project/menu");
};

export default handler;
