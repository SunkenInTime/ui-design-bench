import clsx from "clsx";
import Image, { type ImageProps } from "next/image";

type ThemeAwareLogoProps = Omit<ImageProps, "src"> & {
  lightSrc: string;
  darkSrc?: string;
};

export function ThemeAwareLogo({ lightSrc, darkSrc, className, alt, ...props }: ThemeAwareLogoProps) {
  if (!darkSrc || darkSrc === lightSrc) {
    return <Image src={lightSrc} alt={alt} className={className} {...props} />;
  }

  return (
    <>
      <Image src={lightSrc} alt={alt} className={clsx(className, "dark:hidden")} {...props} />
      <Image src={darkSrc} alt={alt} className={clsx(className, "hidden dark:block")} {...props} />
    </>
  );
}
