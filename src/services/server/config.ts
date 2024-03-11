const getBaseConfigs = async (): Promise<Record<string, string>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Encacap's Next.js Starter",
        description: "A starter template for Next.js with TypeScript, Tailwind CSS, and more.",
      });
    }, 1000);
  });
};

export { getBaseConfigs };
