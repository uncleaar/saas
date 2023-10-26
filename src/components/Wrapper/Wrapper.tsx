import { cn } from "@/lib/utils";

type WrapperProps = {
    children: React.ReactNode;
    className?: string;
};

export const Wrapper: React.FC<WrapperProps> = ({ children, className }) => (
    <div className={cn('mx-auto w-full max-w-screen-lg px-2.5 md:px-20', className)}>
        {children}
    </div>
);
