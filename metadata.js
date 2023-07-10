
import { useFilePicker } from "use-file-picker";
import { NFTStorage, File } from "nft.storage";

import { mintNFT } from "./minTNFT";


const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY1MTIyMGYwM2U1MDg2OUNGNUY5ZDY1ZUU5OWU5ODdEODY3MUQ1MEMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MjY3MDU0NTA3NiwibmFtZSI6IkJlYXN0VmVyc2UifQ.6z_Wp1sJgaTH94b3nA2ARwDkvezQhcVkckf3V9WA4e8";
const client = new NFTStorage({ token: apiKey });
const metadata = await client.store({
    name: image,
    description: "My tezoz nft",
            decimals: 0,
            symbol: symbol,
    image: new File(
      [filesContent[0].content],
      filesContent[0].name,
      { type: "image/" + filesContent[0].name.split(".")[1] }
    ),
  });
  mintNFT("tz1bYPjGBfMN6q2GGt1Da8eyNsjrmftNaxWs",`${metadata.url}`);
  console.log(metadata.url);