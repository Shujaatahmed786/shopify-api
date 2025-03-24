export default function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: "$19/mo",
      features: ["1 Website", "10GB Storage", "Basic Support"],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$49/mo",
      features: ["5 Websites", "50GB Storage", "Priority Support"],
      buttonText: "Upgrade Now",
    },
    {
      name: "Enterprise",
      price: "$99/mo",
      features: ["Unlimited Websites", "200GB Storage", "24/7 Support"],
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800">{plan.name}</h2>
            <p className="text-4xl font-extrabold text-blue-600 my-4">
              {plan.price}
            </p>
            <ul className="text-gray-600 space-y-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center space-x-2"
                >
                  <span className="text-green-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
