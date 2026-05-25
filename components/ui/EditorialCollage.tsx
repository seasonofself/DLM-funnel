"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CollageImage = {
  src: string;
  alt: string;
  /** object-position for cropping */
  position?: string;
};

type EditorialCollageProps = {
  primary: CollageImage;
  secondary?: CollageImage;
  accent?: CollageImage;
  className?: string;
  reverse?: boolean;
};

/**
 * Editorial three-image collage:
 * - one large primary portrait (3:4)
 * - one secondary smaller square (overlapping bottom)
 * - one tiny accent square (top corner)
 * Inspired by magazine layouts — asymmetric, overlapping, with subtle rotation.
 */
export default function EditorialCollage({
  primary,
  secondary,
  accent,
  className = "",
  reverse = false,
}: EditorialCollageProps) {
  return (
    <div className={`relative ${className}`}>
      {/* primary large image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`relative aspect-[3/4] w-[78%] ${reverse ? "ml-auto" : ""} rounded-[28px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(34,34,34,0.35)]`}
      >
        <Image
          src={primary.src}
          alt={primary.alt}
          fill
          className="object-cover"
          style={{ objectPosition: primary.position ?? "center" }}
          priority
        />
      </motion.div>

      {/* secondary smaller square — overlaps bottom corner */}
      {secondary && (
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: reverse ? 4 : -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: reverse ? 2 : -2 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute -bottom-8 ${reverse ? "-left-4 sm:-left-8" : "-right-4 sm:-right-8"} aspect-square w-[42%] rounded-[20px] overflow-hidden shadow-[0_24px_60px_-30px_rgba(34,34,34,0.4)] border-4 border-cream`}
        >
          <Image
            src={secondary.src}
            alt={secondary.alt}
            fill
            className="object-cover"
            style={{ objectPosition: secondary.position ?? "center" }}
          />
        </motion.div>
      )}

      {/* small accent square — top corner */}
      {accent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: reverse ? -6 : 6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: reverse ? -3 : 3 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute -top-4 ${reverse ? "-right-2 sm:-right-6" : "-left-2 sm:-left-6"} aspect-[3/4] w-[26%] rounded-[14px] overflow-hidden shadow-[0_18px_40px_-20px_rgba(34,34,34,0.35)] border-2 border-cream`}
        >
          <Image
            src={accent.src}
            alt={accent.alt}
            fill
            className="object-cover"
            style={{ objectPosition: accent.position ?? "center" }}
          />
        </motion.div>
      )}
    </div>
  );
}
