import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


/**
 * 检查当前设备是否为安卓设备
 * @returns {boolean} 如果是安卓设备则返回 true，否则返回 false
 */
export function isAndroidDevice() {
  const userAgent = navigator.userAgent || navigator.vendor;
  return /android/i.test(userAgent);
}

