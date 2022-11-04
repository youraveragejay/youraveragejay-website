import AuroraLayout from "../../layouts/AuroraLayout";
const getCommands = async () => {
  const commands = await fetch(
    "https://discord.com/api/v9/applications/977647458677035008/commands"
  );
  console.log(commands);
};
const Commands = () => {
  getCommands();

  return (
    <AuroraLayout>
      <div className="commands">
        <ul>
          <li>test</li>
        </ul>
      </div>
    </AuroraLayout>
  );
};

export default Commands;
