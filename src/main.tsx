
  import { createRoot } from "react-dom/client";
  import { MantineProvider } from "@mantine/core";
  import { theme } from "./theme/theme";
  import App from "./App.tsx";
  import "@mantine/core/styles.css";
  import "./styles/globals.css";
  import "./styles/artifact-tailwind.css";

  createRoot(document.getElementById("root")!).render(
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  );
