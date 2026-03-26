import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Star, Smile } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export default function IPDesignPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6">
            IP设计
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Logo设计 · 角色设计 · 表情包创作
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* 成都理工大学体育学院 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  成都理工大学体育学院
                </h2>
                <p className="text-sm text-muted-foreground">Logo和角色设计</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              为成都理工大学体育学院设计品牌Logo及配套角色形象，
              将体育精神与学院特色相融合，打造具有辨识度的视觉识别系统。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImagePlaceholder
                icon={Star}
                text="Logo设计"
                aspectRatio="aspect-square"
              />
              <ImagePlaceholder
                icon={Star}
                text="角色设计"
                aspectRatio="aspect-square"
              />
            </div>
          </div>

          {/* 时尚芭莎获奖作品 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  时尚芭莎获奖作品
                </h2>
                <p className="text-sm text-muted-foreground">莎莎IP设计</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              参与时尚芭莎IP设计大赛，作品「莎莎」荣获奖项。
              设计融合时尚元素与可爱风格，展现品牌年轻化的活力形象。
            </p>
            <ImagePlaceholder
              icon={Award}
              text="获奖IP设计作品"
              aspectRatio="aspect-video"
            />
          </div>

          {/* 成都理工大学官方IP栗子 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Smile className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  成都理工大学官方IP
                </h2>
                <p className="text-sm text-muted-foreground">栗子表情包 · 插图</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              参与设计成都理工大学官方吉祥物「栗子」的表情包和系列插图，
              为校园文化传播增添趣味性和亲和力。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImagePlaceholder
                icon={Smile}
                text="栗子1"
                aspectRatio="aspect-square"
              />
              <ImagePlaceholder
                icon={Smile}
                text="栗子2"
                aspectRatio="aspect-square"
              />
              <ImagePlaceholder
                icon={Smile}
                text="栗子3"
                aspectRatio="aspect-square"
              />
              <ImagePlaceholder
                icon={Smile}
                text="栗子4"
                aspectRatio="aspect-square"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-foreground mb-8">设计技能</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">Logo设计</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">角色设计</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">表情包设计</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">品牌视觉</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">插画创作</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">Adobe Illustrator</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">Procreate</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
