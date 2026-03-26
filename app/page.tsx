import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Palette, PenTool } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Personal Introduction */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-secondary/20" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src="/avatar-placeholder.jpg"
                alt="个人头像"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-4 text-balance">
            运营 · IP · 设计
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            热爱内容创作与视觉设计，专注于账号运营、IP形象设计与创意视觉呈现
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">爆款内容</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">网感热点</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">IP设计</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">视觉创意</span>
          </div>
          
          <Link href="/about">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider"
            >
              了解更多
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Three Main Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">作品集</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              探索我在运营、IP设计和视觉创作领域的作品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 账号运营 */}
            <Link href="/operation" className="group relative aspect-[3/4] overflow-hidden bg-muted rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-3 text-foreground">账号运营</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  小红书运营 · 爆款内容 · 公众号策划
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-sm flex items-center gap-1">
                    查看详情 <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* IP设计 */}
            <Link href="/ip-design" className="group relative aspect-[3/4] overflow-hidden bg-muted rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-accent/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-3 text-foreground">IP设计</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Logo设计 · 角色设计 · 表情包
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-sm flex items-center gap-1">
                    查看详情 <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* 设计作品 */}
            <Link href="/design" className="group relative aspect-[3/4] overflow-hidden bg-muted rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-3 text-foreground">设计作品</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  海报设计 · 摄影作品 · 绘画原画
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-sm flex items-center gap-1">
                    查看详情 <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            亮点经历
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-3xl font-serif text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">小红书笔记获赞</div>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-3xl font-serif text-primary mb-2">时尚芭莎</div>
              <div className="text-sm text-muted-foreground">IP设计获奖</div>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-3xl font-serif text-primary mb-2">官方IP</div>
              <div className="text-sm text-muted-foreground">成都理工大学栗子</div>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-3xl font-serif text-primary mb-2">实习经历</div>
              <div className="text-sm text-muted-foreground">小红书账号运营</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
