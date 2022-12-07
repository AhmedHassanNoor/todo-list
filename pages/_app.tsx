import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import store from "redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
