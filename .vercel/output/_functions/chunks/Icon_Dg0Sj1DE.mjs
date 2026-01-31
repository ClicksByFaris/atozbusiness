import { jsx } from 'react/jsx-runtime';
import * as LucideIcons from 'lucide-react';

function Icon({ name, className = "", size = 24, ...props }) {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }
  return /* @__PURE__ */ jsx(IconComponent, { size, className, ...props });
}

export { Icon as I };
