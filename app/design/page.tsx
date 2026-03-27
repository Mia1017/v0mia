"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Monitor, Image as ImageIcon, Camera, Brush, Play } from "lucide-react"
import Link from "next/link"

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero 头部区域 */}
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

      {/* 项目展示区域 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* 1. 成都理工大学官网门户版块 */}
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
            
            {/* 垂直排列的大图列表 */}
            <div className="flex flex-col gap-8 md:gap-12">
              {[
                { src: "yu.jpg", alt: "官网大图-雨" },
                { src: "hanlu.jpg", alt: "官网大图-寒露" },
                { src: "liqiu.jpg", alt: "官网大图-立秋" },
                { src: "dong.jpg", alt: "官网大图-冬" }
              ].map((img, index) => (
                <div key={index} className="w-full relative rounded-xl border border-border shadow-md overflow-hidden bg-muted group transition-all duration-500 hover:shadow-2xl">
                  <img 
                    src={`/${img.src}`} // 修正：直接从 public 根目录读取
                    alt={img.alt} 
                    loading="lazy"      // 性能优化：懒加载
                    decoding="async"    // 性能优化：异步解码，防止滚动卡顿
                    className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 2. 海报获奖作品 */}
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
              <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-dashed border-border text-muted-foreground text-xs">Poster Gallery</div>
              <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-dashed border-border text-muted-foreground text-xs">Poster Gallery</div>
              <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-dashed border-border text-muted-foreground text-xs">Poster Gallery</div>
            </div>
          </div>

          {/* 3. 创意节气摄影 & 新春GIF */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  创意摄影与表情包
                </h2>
                <p className="text-sm text-muted-foreground">二十四节气系列 & 新春GIF</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              以中国传统文化为灵感，结合自然摄影与数字绘画创作的系列作品。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['春', '夏', '秋', '冬'].map((item) => (
                <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border text-muted-foreground text-sm font-light">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 4. 绘画作品游戏原画 */}
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
              展现数字绘画技巧与创意构思能力。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border text-muted-foreground text-sm">原画作品</div>
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border text-muted-foreground text-sm">插画创作</div>
            </div>
          </div>

        </div>
      </section>

      {/* 底部技能标签 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 text-center">
        <h2 className="font-serif text-3xl font-light mb-8">设计技能</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {["Photoshop", "Illustrator", "After Effects", "Procreate", "摄影", "数字绘画"].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 返回主页 */}
      <div className="py-20 flex justify-center">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-10 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all shadow-lg hover:-translate-y-1"
        >
          <span className="font-medium">返回主页</span>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
