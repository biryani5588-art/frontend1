import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51SoinoFipdSC2ebiOf7FiAxDxRljugR5VWwK4Ko9oM0PaXLaXVZdpdprXs1VK9PPTKVQOuHuXgBTs9XiUPq5oIvy00wjkbM240" // publishable key
);
