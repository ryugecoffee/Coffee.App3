const secondaryWheelData = [
  {
    label: "CUP PROFILE",
    color: "#111111",
    children: [
      {
        label: "AROMA",
        color: "#1f1f1f",
        noSplit: true,
        children: ["ROUND", "INTENSE"],
      },
      {
        label: "TASTE",
        color: "#1a1a1a",
        children: [
          {
            label: "ACIDITY",
            color: "#252525",
            children: ["BRIGHT", "CRISP"],
          },
          {
            label: "SWEETNESS",
            color: "#2c2c2c",
            children: ["CANDIED", "BALANCED"],
          },
        ],
      },
      {
        label: "MOUTHFEEL",
        color: "#2a2a2a",
        children: [
          {
            label: "TEXTURE",
            color: "#353535",
            children: ["ROUND", "SMOOTH"],
          },
          {
            label: "BODY",
            color: "#3d3d3d",
            children: ["SYRUPY", "HEAVY"],
          },
        ],
      },
      {
        label: "AFTERTASTE",
        color: "#242424",
        noSplit: true,
        children: ["LINGERING", "LONG"],
      },
    ],
  },
];

export default secondaryWheelData;