import logoImage from "../../../../../assets/images/fondos/login-image.webp";

export const LeftSide = () => {
  return (
    <div className="hidden xl:block w-1/2 h-screen overflow-hidden">
      <img
        src={logoImage}
        alt="Vegetales frescos"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
