import React from "react";
import "../styles/Benefits.css";

function Benefits() {
  const benefits = [
    {
      title: "Reduces Stress",
      description: "Plants create a calming atmosphere, helping you relax and stay focused.",
      icon: "🌱",
    },
    {
      title: "Improves Air Quality",
      description: "Indoor plants naturally filter toxins and release fresh oxygen.",
      icon: "🍃",
    },
    {
      title: "Boosts Productivity",
      description: "Greenery in your workspace enhances concentration and creativity.",
      icon: "💡",
    },
    {
      title: "Eco-Friendly Choice",
      description: "Renting plants promotes sustainability and reduces waste.",
      icon: "🌍",
    },
    {
      title: "Mood Enhancer",
      description: "Being surrounded by greenery improves mental health and positivity.",
      icon: "😊",
    },
    {
      title: "Aesthetic Appeal",
      description: "Stylish plant pots make your space look modern and inviting.",
      icon: "🏡",
    },
  ];

  return (
    <section className="benefits">
      <h2>🌿 Benefits of Having Plants</h2>
      <div className="benefit-cards">
        {benefits.map((benefit, index) => (
          <div className="card" key={index}>
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;

