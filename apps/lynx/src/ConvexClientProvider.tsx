import { ConvexReactClient, ConvexProvider } from "convex/react";

const CONVEX = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);

type Props = React.PropsWithChildren;

export default function ConvexClientProvider({ children }: Props) {
  return (
    // @ts-expect-error
    <ConvexProvider client={CONVEX}>
      {children}
    </ConvexProvider>
  );
}
