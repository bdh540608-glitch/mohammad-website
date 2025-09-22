
دليل خطوة-بخطوة لرفع الموقع على GitHub و تفعيل GitHub Pages
-----------------------------------------------------------

إعدادات سريعة (روابط مهمة):
- إنشاء حساب GitHub (إن لم يكن لديك): https://github.com/join  — استخدم هذا الرابط للتسجيل.
- صفحة إنشاء مستودع جديد: https://github.com/new
- مستند GitHub Pages (تكوين النشر): https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- تعليمات رفع مشروع (GitHub Docs): https://docs.github.com/en/get-started/start-your-journey/uploading-a-project-to-github
- تحميل Git (إن رغبت تستعمل سطر الأوامر): https://git-scm.com/downloads

الطريقة الأسهل — رفع عبر واجهة الويب (دون استخدام Git على جهازك)
1. افتح https://github.com/join وأنشئ حساب لو ما عندك.
2. بعد تسجيل الدخول، افتح https://github.com/new لإنشاء مستودع جديد.
   - Repository name: اكتب مثلاً `mohammad-website`
   - Description: (اختياري) "موقعي الشخصي — محمد عبده ملهي"
   - اجعل المستودع Public.
   - اضغط Create repository.
3. في صفحة المستودع الجديد، اضغط الزر "Add file" → "Upload files".
4. اسحب وأفلِت ملفات الموقع داخل النافذة (index.html, styles.css, script.js, resume_arabic.txt, README_STEPS.md).
5. أدخل رسالة Commit (مثل "Initial site upload") ثم اضغط Commit changes.
6. لتفعيل GitHub Pages:
   - افتح: https://github.com/YOUR-USERNAME/YOUR-REPO/settings/pages  (استبدل YOUR-USERNAME و YOUR-REPO باسمك واسم المستودع).
   - أو من صفحة المستودع: Settings → Pages (قسم Code and automation → Pages).
   - ضمن Build and deployment اختر "Deploy from a branch".
   - اختر Branch = `main` و Folder = `/ (root)` ثم اضغط Save.
7. بعد دقائق، سيظهر رابط الموقع كـ `https://YOUR-USERNAME.github.io/YOUR-REPO/` — هذا هو رابط قالبك الذي يعمل على الإنترنت.

الطريقة المتقدمة — رفع باستخدام Git (سهل ومرن)
1. تثبيت Git:
   - نزّل Git من https://git-scm.com/downloads وتثبّته على جهازك.
2. افتح Terminal (macOS/Linux) أو Git Bash (Windows) ونسّق معلومات المستخدم:
   ```
   git config --global user.name "YOUR-GITHUB-USERNAME"
   git config --global user.email "bdh540608@gmail.com"
   ```
3. فكّ ضغط الأرشيف على جهازك وضع الملفات في مجلد مثلاً `mohammad-website`.
4. ادخل المجلد:
   ```
   cd path/to/mohammad-website
   git init
   git add .
   git commit -m "Initial commit — personal website"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/mohammad-website.git
   git push -u origin main
   ```
   - إذا طلب Git اسم المستخدم وكلمة المرور: أدخلها (أو استخدم Personal Access Token بدل كلمة المرور).
4. فعل GitHub Pages مثل خطوات الواجهة السابقة (Settings → Pages).

ملاحظات وأشياء مفيدة
- رابط الموقع النهائي بعد التفعيل عادة: https://YOUR-GITHUB-USERNAME.github.io/mohammad-website/
- إذا أردت اسم النطاق (Domain) خاص: تقدر تضيف ملف CNAME وتعدّل إعدادات DNS — مستند GitHub Pages يشرح الخطوات.
- إن أردت أرفع المستودع لك أو أساعدك خطوة بخطوة أثناء الرفع، دلّني على اسم المستخدم وسأعطيك أوامر مُخصّصة.

تم تضمين الملفات في الأرشيف التالي:
- index.html (محدّث لبريدك)
- styles.css
- script.js
- resume_arabic.txt (محدّث لبريدك)
- README_STEPS.md (هذا الملف)

