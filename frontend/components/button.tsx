import { cn } from "./utils"
import { cva, type VariantProps } from "class-variance-authority"

interface ButtonProps extends 
    React.ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {
    children?: string;
}

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-xs xl:text-xs 2xl:text-sm 3xl:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-zinc-700 hover:bg-zinc-700/90 text-white",
          success:
            "bg-green-600 text-white hover:bg-green-600/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          default2: "bg-white text-zinc-700 border border-zinc-700 hover:bg-slate-50",
          default3: "text-blue-600 bg-blue-50 hover:bg-[#F2FAFF]",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
)

const Button: React.FC<ButtonProps> = ({ variant, size, children, className, ...props }) => {
return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
        {children}
    </button>
)
}

export {Button}