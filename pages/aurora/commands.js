import AuroraLayout from "../../layouts/AuroraLayout";
import Head from "next/head";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function myFunction() {
  // Declare variables
  var input, filter, ul, li, h1, i, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  ul = document.getElementById("commandsList");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    h1 = li[i].getElementsByTagName("h1")[0];
    txtValue = h1.textContent || h1.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const Commands = ({ commands }) => {
  return (
    <AuroraLayout>
    <Head><title>Aurora | Commands</title></Head>
      <div className="commands">
        <input
          type="text"
          id="searchBar"
          placeholder="Search Commands"
          onKeyUp={() => myFunction()}
        ></input>
        <ul id="commandsList">
          {commands.map((command) => (
            <li key={command.id}>
              <h1>/{capitalizeFirstLetter(command.name)}</h1>
              <p>
                <i>{command.description}</i>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </AuroraLayout>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://discord.com/api/v10/applications/977647458677035008/commands`,
    {
      method: "GET",
      headers: {
        authorization: `Bot ${process.env.TOKEN}`,
      },
    }
  );
  const commands = await response.json();

  if (!commands) {
    return {
      notFound: true,
    };
  }

  return {
    props: { commands },
  };
}

export default Commands;
