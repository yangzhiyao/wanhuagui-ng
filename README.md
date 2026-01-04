# 万花规

[![Security Status](https://img.shields.io/badge/security-no%20vulnerabilities-brightgreen)](./CVE_SECURITY_ANALYSIS_2026.md)
[![Angular](https://img.shields.io/badge/Angular-21.0.5-red)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple)](https://getbootstrap.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green)](https://nodejs.org/)

小时候玩过的万花规，万花规可以画出很多神奇图案。万花规所画的奇妙图形就是一个小圆，内切大圆做滚动时小圆内部某点画出来的轨迹所形成的。利用展品提供的触碰笔的笔尖，穿过小圆的内孔使得小圆沿着大圆做顺时针的滚动。在我们的屏幕上方就可以显示出一条曲线的轨迹，这就是我们的内切摆线，继续画这样的曲线就可以得到奇妙的图案。

## 🔒 安全状态

**最后审计**: 2026-01-04  
**漏洞数量**: 0  
**状态**: 🟢 安全

查看详细的 [安全分析报告](./CVE_SECURITY_ANALYSIS_2026.md) 和 [安全策略](./SECURITY.md)。

### 快速安全检查

```bash
# 检查依赖漏洞
pnpm run security:check

# 自动修复已知漏洞
pnpm run security:fix

# 生成安全报告
pnpm run security:report
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
