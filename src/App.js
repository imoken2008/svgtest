import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ForceGraph2D from "react-force-graph-2d";

var data = {
  nodes: [
    { id: "A", x11: "10", y11: "20" },
    { id: "B", x11: "10", y11: "40" },
    { id: "C", x11: "40", y11: "20" },
    { id: "D", x11: "40", y11: "40" }
  ],
  links: [
    { source: "B", target: "C", value: 30 },
    { source: "C", target: "D", value: 10 },
    { source: "D", target: "A", value: 6 },
    { source: "B", target: "A", value: 6 },
    { source: "B", target: "D", value: 6 },
    { source: "D", target: "D", value: 6, curvature: 0.3 }
  ]
};

export const App = () => {
  return (
    <>
      <ForceGraph2D
        graphData={data}
        nodeCanvasObject={(node, ctx, globalScale) => {
          let rect_width = 20;
          let rect_height = 10;

          ctx.strokeStyle = "gray";
          ctx.strokeRect(node.x11, node.y11, rect_width, rect_height);
          ctx.fillText(
            node.id,
            node.x11 + rect_width / 2,
            node.y11 + rect_height / 2
          );
          ctx.textAlign = "center";
          ctx.textBaseLine = "middle";
          //ctx.fillStyle = "gray";
          //ctx.strokeStyle = "gray";
        }}
        linkCanvasObject={(link, ctx, globalScale) => {}}
      />
    </>
  );
};
