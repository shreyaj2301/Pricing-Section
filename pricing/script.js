document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("pricing-toggle");
    const prices = document.querySelectorAll(".price");
    const frequencies = document.querySelectorAll(".price-frequency");
  
    // Function to update prices
    const updatePrices = () => {
      const isAnnual = toggle.checked;
      prices.forEach((price) => {
        const monthlyPrice = price.getAttribute("data-monthly");
        const annualPrice = price.getAttribute("data-annual");
  
        price.textContent = `$${isAnnual ? annualPrice : monthlyPrice}`;
      });
  
      frequencies.forEach((freq) => {
        freq.textContent = isAnnual ? "per year" : "per month";
      });
    };
  
    // Initialize prices on page load
    updatePrices();
  
    // Update prices when toggle changes
    toggle.addEventListener("change", updatePrices);

    
  });

  
  