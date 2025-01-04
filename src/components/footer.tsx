import { Button } from "@/components/ui/button"
import { FOOTER_LINKS } from "@/constants"
import { useToast } from "@/hooks/use-toast"

export const Footer = () => {
  const { toast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(FOOTER_LINKS.contact)
      toast({
        description: "复制成功！",
      })
    } catch (err) {
      toast({
        variant: "destructive",
        description: "复制失败，请重试",
      })
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t bg-background max-w-7xl mx-auto">
      <div className="container flex items-center justify-between py-4">
        <div>
          <Button variant="link" asChild>
            <a 
              href={FOOTER_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="link" asChild>
            <a 
              href={FOOTER_LINKS.beian.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FOOTER_LINKS.beian.text}
            </a>
          </Button>
          <Button variant="link" onClick={handleCopy}>
            联系我
          </Button>
        </div>
      </div>
    </footer>
  )
}