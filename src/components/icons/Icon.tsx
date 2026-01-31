import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface Props extends Omit<LucideProps, 'ref'> {
    name: keyof typeof LucideIcons;
    className?: string;
}

export default function Icon({ name, className = '', size = 24, ...props }: Props) {
    const IconComponent = LucideIcons[name] as React.ComponentType<LucideProps>;

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null;
    }

    return <IconComponent size={size} className={className} {...props} />;
}
