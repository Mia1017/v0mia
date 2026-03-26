import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react"

export default function OperationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6">
            账号运营
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            爆款内容 · 网感热点 · 冲浪达人
          </p>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* 小红书实习 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  小红书账号运营实习
                </h2>
                <p className="text-sm text-muted-foreground">北海道Ayaka酱</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              负责小红书账号的日常运营，包括内容策划、发布排期、数据分析及用户互动。
              深入了解小红书平台规则和算法，掌握爆款内容创作技巧。
            </p>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="/operation-xiaohongshu-internship.jpg" 
                alt="小红书运营实习作品" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 个人账号 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  个人小红书账号
                </h2>
                <p className="text-sm text-muted-foreground">娱乐追星类笔记千赞</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              运营个人娱乐追星类账号，善于捕捉热点话题，创作具有网感的内容。
              多篇笔记获得千赞以上互动，积累了丰富的内容创作和社区运营经验。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/operation-personal-note-1.jpg" 
                  alt="个人笔记作品1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/operation-personal-note-2.jpg" 
                  alt="个人笔记作品2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 公众号策划 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  成都理工大学公众号策划
                </h2>
                <p className="text-sm text-muted-foreground">毕业季长图推送</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              参与成都理工大学官方公众号内容策划，负责毕业季专题长图推送的创意策划与设计执行。
              作品获得校内师生广泛好评与转发。
            </p>
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/operation-wechat-graduation.jpg" 
                alt="毕业季长图推送" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-foreground mb-8">运营技能</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">内容策划</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">数据分析</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">热点追踪</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">用户运营</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">社群管理</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">小红书</span>
            <span className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">微信公众号</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
