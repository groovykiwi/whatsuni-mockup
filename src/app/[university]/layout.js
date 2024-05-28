import TopNavbar from "../components/TopNavbar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import { ThemeProvider } from "next-themes";
export default function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <div className="flex flex-col h-screen overflow-y-hidden ">
        <TopNavbar university="mit.edu" />
        {/* Panels */}
        <div className="flex h-[calc(100%-4.75rem)] w-screen justify-center">
          <LeftPanel />
          <RightPanel
            popularList={[
              "cat",
              "nasa",
              "newyear",
              "midterms",
              "whatsuni",
              "beach",
            ]}
          />
          {/* Center Panel */}
          <div className="flex flex-col items-center justify-center order-2 w-full h-screen md:mt-4 md:w-2/3 lg:mx-10 lg:w-1/3">
            {/* Feed */}
            <div className="flex flex-col items-center pb-64 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
