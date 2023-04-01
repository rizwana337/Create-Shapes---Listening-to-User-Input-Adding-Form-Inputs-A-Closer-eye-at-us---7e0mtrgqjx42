import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
const [selectedShape, setSelectedShape] = useState("square");
const [shapes, setShapes] = useState([]);

const handleSelectChange = (e) => {
setSelectedShape(e.target.value);
};

const handleAddShape = () => {
const newShape = selectedShape === "square" ? (
<div className="square"></div>
) : (
<div className="circle"></div>
);
setShapes([...shapes, newShape]);
};

return (
<div id="main">
<div id="shape-creator">
<select value={selectedShape} onChange={handleSelectChange}>
<option value="square">Square</option>
<option value="circle">Circle</option>
</select>
<button onClick={handleAddShape}>Add shape</button>
</div>
<div id="shapes-holder">
{shapes.map((shape, index) => (
<div key={index}>{shape}</div>
))}
</div>
</div>
);
};

export default App;
