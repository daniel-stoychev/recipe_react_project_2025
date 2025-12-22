import {
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  BeakerIcon,
  ScissorsIcon,
  EyeIcon,
  CogIcon,
  ArrowsPointingOutIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";

const tips = [
  {
    title: "Use Fresh Ingredients",
    content:
      "Fresh ingredients can significantly enhance the flavor of your dishes. Always opt for local and seasonal produce for the best results.",
    icon: SparklesIcon,
  },
  {
    title: "Season Your Food Properly",
    content:
      "Seasoning is key to a flavorful dish. Use salt, pepper, and herbs to bring out the natural flavors of your ingredients.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Understand Cooking Techniques",
    content:
      "Different cooking techniques can drastically change the texture and flavor of your food. Experiment with roasting, grilling, and sautéing.",
    icon: BeakerIcon,
  },
  {
    title: "Keep Your Knives Sharp",
    content:
      "A sharp knife not only makes chopping easier but also safer. Regularly sharpen your knives to maintain efficiency.",
    icon: ScissorsIcon,
  },
  {
    title: "Taste as You Cook",
    content:
      "Tasting your food as you cook allows you to adjust seasoning and flavors, ensuring a delicious final dish.",
    icon: EyeIcon,
  },
  {
    title: "Use the Right Tools",
    content:
      "Invest in quality kitchen tools and appliances that make cooking easier and more enjoyable.",
    icon: CogIcon,
  },
  {
    title: "Don’t Overcrowd the Pan",
    content:
      "Overcrowding the pan can lead to uneven cooking. Give your ingredients space to cook properly.",
    icon: ArrowsPointingOutIcon,
  },
  {
    title: "Let Meat Rest Before Serving",
    content:
      "Allow cooked meat to rest for a few minutes before serving to retain its juices and enhance flavor.",
    icon: PauseIcon,
  },
];

export default function Tips() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-10">Tips</h1>
      <div className="border-t-4 border-amber-700 mt-4"></div>
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <Icon className="w-6 h-6 text-amber-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {tip.title}
                  </h2>
                </div>
                <p className="mt-2 text-gray-600">{tip.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
