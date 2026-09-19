# ICT Lab Community — Phase 1 setup

1. Put the project in your WAMP `www` folder. PHP pages will not work by double-clicking them as `file://` pages.
2. Open phpMyAdmin and import `community_setup.sql`.
3. Open `community_config.php`. The WAMP defaults are already `localhost`, database `ictlab_community`, user `root`, blank password. Change them if your MySQL setup differs.
4. IMPORTANT: change `COMMUNITY_ADMIN_PASSWORD` before deployment.
5. Open `http://localhost/<your-project-folder>/community.php`.
6. Test joining, accepting the rules, posting, replying, reporting, and the admin dashboard at `community_admin.php`.

## Included in Phase 1
- Community membership with rules agreement + agreement version/timestamp record
- Topic feed and filtering
- Text posts, replies and optional resource links
- Server-side blocked-term filter
- Report system
- Admin dashboard: reports, delete posts, mute/ban/reactivate users, add blocked terms
- Moderation audit table
- In-app notification database foundation (reply notifications are already recorded)
- CSRF protection, prepared SQL statements and HTML output escaping

## Next phase
Uploads (PDF/images), safer file validation/storage, reactions/bookmarks, search, richer notifications/PWA push, and real-time chat can be added after Phase 1 is tested.
