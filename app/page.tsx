import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "$GOB"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmaXty314ZseHbrcEtmu8jNDXmPhz8TSASbBLqWP89H8qZ/g3.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'FarGoblin',
  description: 'Move over meme coins, there a new player in town and its the most meme-worthy of them all - $GOBLIN.',
  openGraph: {
    title: 'FarGoblin',
    description: 'Move over meme coins, there a new player in town and its the most meme-worthy of them all - $GOBLIN.',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmaXty314ZseHbrcEtmu8jNDXmPhz8TSASbBLqWP89H8qZ/g3.png`],

  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>FarGoblin</h1>
    </>
  );
}
