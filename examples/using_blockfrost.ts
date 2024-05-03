import { Blockfrost } from "../packages/blaze-query/dist/index";

const send_lovelace = async () => {
  const projectId = process.env["BLOCKFROST_PROJECT_ID"];
  if (!projectId) {
    throw new Error("Missing blockfrost key");
  }

  const provider = new Blockfrost({
    network: "cardano-preview",
    projectId,
  });

  console.log(await provider.getParameters());
};

send_lovelace();