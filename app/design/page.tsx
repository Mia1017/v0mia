"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Monitor, Image as ImageIcon, Camera, Brush, Play } from "lucide-react"
import Link from "next/link"

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6">
            设计作品
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            海报设计 · 摄影作品 · 绘画原画 · 动画创作
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* 官网门户大图 - 垂直排列 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  成都理工大学官网门户
                </h2>
                <p className="text-sm text-muted-foreground">大图制作</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              负责成都理工大学官方网站首页轮播大图的设计制作，
              结合校园文化与时事热点，呈现学校的多元风采。
            </p>
            
            {/* 图片垂直展示区域 */}
            <div className="flex flex-col gap-8 md:gap-12">
              {[
                { src: "yu.jpg", alt: "官网门户大图-雨" },
                { src: "hanlu.jpg", alt: "官网门户大图-寒露" },
                { src: "liqiu.jpg", alt: "官网门户大图-立秋" },
                { src: "dong.jpg", alt: "官网门户大图-冬" }
              ].map((img, index) => (
                <div key={index} className="w-full relative rounded-xl border border-border shadow-md overflow-hidden bg-muted group transition-all duration-500 hover:shadow-2xl">
                  <img 
                    src={`/v0-designer-brand-tk/${img.src}`} 
                    alt={img.alt} 
                    loading="lazy" // 优化：懒加载，缓解页面卡顿
                    className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 海报获奖作品 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <ImageIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  海报获奖作品
                </h2>
                <p className="text-sm text-muted-foreground">创意海报设计</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              在各类设计比赛中获奖的海报作品，涵盖公益、文化、商业等多种主题，
              展现创意思维与视觉表达能力。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-dashed border-border text-muted-foreground text-xs uppercase tracking-widest">Poster 01</div>
              <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-dashed border-border text-muted-foreground text-xs uppercase tracking-widest">Poster 02</div>
              <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-dashed border-border text-muted-foreground text-xs uppercase tracking-widest">Poster 03</div>
            </div>
          </div>

          {/* 创意节气摄影 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  创意节气摄影
                </h2>
                <p className="text-sm text-muted-foreground">二十四节气系列</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              以中国传统二十四节气为主题的创意摄影作品，
              将自然之美与传统文化相结合，用镜头记录季节变换的诗意。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['春', '夏', '秋', '冬'].map((season) => (
                <div key={season} className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border text-muted-foreground text-sm font-light">
                  {season}
                </div>
              ))}
            </div>
          </div>

          {/* 绘画作品游戏原画 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Brush className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  绘画作品
                </h2>
                <p className="text-sm text-muted-foreground">游戏原画</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              游戏角色原画设计与插画创作，涵盖角色设计、场景概念、道具设计等，
              展现数字绘画技巧与创意构思能力。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border text-muted-foreground text-sm">游戏原画作品</div>
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border text-muted-foreground text-sm">插画创作</div>
            </div>
          </div>

          {/* 动画作品尝试 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Play className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  动画作品尝试
                </h2>
                <p className="text-sm text-muted-foreground">科普动画</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              尝试制作的医学科普动画，将复杂的手术过程以简洁易懂的动画形式呈现，
              探索动画在内容创作领域的应用可能。
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
              <Play className="w-10 h-10 text-muted-foreground/20" />
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-foreground mb-8">设计技能</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Photoshop", "Illustrator", "After Effects", "Procreate", "摄影", "数字绘画", "动画制作"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border hover:bg-accent/10 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="py-20 flex justify-center">
        <Link 
          href="/" 
          className="group flex items-center gap-2 px-10 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
        >
          <span className="font-medium">返回主页</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
