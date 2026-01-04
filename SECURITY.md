# Security Policy

## Supported Versions

以下版本正在接收安全更新：

| Version | Supported          | Angular Version | Bootstrap Version |
| ------- | ------------------ | --------------- | ----------------- |
| Current | :white_check_mark: | 21.0.5          | 5.3.8             |
| 0.0.x   | :white_check_mark: | 21.0.5          | 5.3.8             |

## Security Status

🟢 **当前状态**: 无已知CVE漏洞

- ✅ 0 个安全漏洞
- ✅ 所有依赖为最新版本
- ✅ 通过自动化安全扫描
- ✅ 符合OWASP安全标准

最后审计时间: 2026-01-04

## Reporting a Vulnerability

如果您发现安全漏洞，请通过以下方式报告：

### 报告渠道

1. **GitHub Security Advisory** (推荐)
   - 访问仓库的 "Security" 标签
   - 点击 "Report a vulnerability"
   - 填写详细信息

2. **邮件报告**
   - 发送到项目维护者邮箱
   - 主题: [SECURITY] 安全漏洞报告
   - 包含详细的漏洞描述和复现步骤

### 报告应包含的信息

- 漏洞类型 (XSS, CSRF, Injection等)
- 影响范围
- 复现步骤
- 建议的修复方案
- 您的联系方式

### 响应时间

- **初步确认**: 48小时内
- **严重性评估**: 7天内
- **修复发布**: 根据严重性
  - Critical: 7天内
  - High: 14天内
  - Medium: 30天内
  - Low: 下一个计划版本

## Security Measures

本项目实施的安全措施：

### 1. 自动化扫描

- ✅ GitHub Dependabot 每周自动检查
- ✅ GitHub Actions 安全审计工作流
- ✅ `pnpm audit` 集成到CI/CD
- ✅ 依赖审查 (Dependency Review)

### 2. 依赖管理

- ✅ 使用 lockfile (pnpm-lock.yaml)
- ✅ 定期更新补丁版本
- ✅ 主要版本升级前测试
- ✅ 移除未使用的依赖

### 3. 代码安全

- ✅ Angular内置XSS防护
- ✅ 模板自动转义
- ✅ TypeScript严格模式
- ✅ AOT编译

### 4. 构建安全

- ✅ 生产环境优化
- ✅ Source map 分离
- ✅ 代码混淆
- ✅ 依赖树摇 (Tree Shaking)

## Vulnerability Disclosure Policy

### 负责任披露原则

我们遵循负责任的漏洞披露原则：

1. **私密报告**: 首先私下向维护者报告
2. **协调修复**: 与维护者协调修复时间
3. **公开披露**: 修复发布后公开详情
4. **致谢**: 在修复公告中致谢报告者

### 不当行为

以下行为不被允许：

- ❌ 在未修复前公开漏洞
- ❌ 利用漏洞进行攻击
- ❌ 破坏服务可用性
- ❌ 访问他人数据

## Security Updates

### 订阅方式

1. **GitHub Watch**
   - 在仓库页面点击 "Watch"
   - 选择 "Custom" -> "Security alerts"

2. **GitHub Security Advisories**
   - 自动通知已知漏洞
   - 接收修复建议

3. **Release Notes**
   - 关注项目发布说明
   - 查看安全相关更新

### 更新流程

1. **检查更新**
   ```bash
   pnpm run security:check
   ```

2. **应用修复**
   ```bash
   pnpm audit fix
   pnpm update --interactive
   ```

3. **测试验证**
   ```bash
   pnpm run build
   pnpm run test
   ```

4. **部署更新**
   - 合并PR到主分支
   - 自动触发CI/CD

## Compliance

### 遵循的标准

- ✅ OWASP Top 10 (2021)
- ✅ CWE/SANS Top 25
- ✅ GitHub Security Best Practices
- ✅ npm Security Best Practices

### 审计历史

| 日期 | 漏洞数 | 严重性 | 状态 |
|------|--------|--------|------|
| 2026-01-04 | 0 | N/A | ✅ 清洁 |
| 2025-12 | 18 | 0 Critical | ✅ 已修复 |
| 2025-11 | 110 | 3 Critical | ⚠️ 已升级 |

## Resources

### 官方文档

- [Angular Security Guide](https://angular.dev/best-practices/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security](https://docs.github.com/en/code-security)

### 工具和服务

- [npm audit](https://docs.npmjs.com/cli/v10/commands/npm-audit)
- [Snyk](https://snyk.io/)
- [GitHub Dependabot](https://github.com/dependabot)
- [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/)

### 安全公告订阅

- [Angular Security Advisories](https://github.com/angular/angular/security/advisories)
- [Bootstrap Security](https://github.com/twbs/bootstrap/security)
- [npm Security Advisories](https://github.com/advisories)

## Contact

如有安全相关问题，请联系：

- GitHub Security Advisory (推荐)
- 项目Issue (非紧急)
- 项目维护者 (紧急)

---

**最后更新**: 2026-01-04  
**下次审计**: 2026-02-01
