import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="content">
			<h1 className="bg-red-500">Rsbuild with React</h1>
			<p>Start building amazing things with Rsbuild. count is：{ count}</p>
			<Button onClick={() => setCount(pre => pre + 1)}> click me</Button>
		</div>
	);
};

export default App;
