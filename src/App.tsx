
import { Download } from "lucide-react";
import "./App.css";
import { Footer } from "./components/footer";
import { Container } from "./components/layoutContainer";
import { Nav } from "./components/nav";
import { Poster } from "./components/poster";
import { Button } from "./components/ui/button";
import { useDownloadDOMElementAsImage } from "./hooks/useDownload";
import { isMobile } from 'react-device-detect';
import { Toaster } from "./components/ui/toaster";
import { isAndroidDevice } from "./lib/utils";

const App = () => {
	const { downloadDOMElementAsImage } = useDownloadDOMElementAsImage();
	const handleDownload = () => {
    downloadDOMElementAsImage('poster');
	};
	return (
		<div className="content">
			<Nav />
			<Container className="flex flex-col items-center justify-center">
				<div className="flex justify-between  w-[375px] mb-4">
					<h1 className="text-2xl">示例海报：</h1>
				{!(isMobile && !isAndroidDevice()) &&	<Button
            onClick={handleDownload}
						variant="outline"
						disabled={isMobile}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            <span>下载海报</span>
          </Button>}
				</div>
				<Poster />
				</Container>
			<Footer />
			<Toaster key={'toast'}  />
		</div>
	);
};

export default App;
