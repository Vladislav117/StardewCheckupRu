# Stardew Checkup Ru

⚠️ Данное приложение является переводом [оригинального приложения](https://github.com/MouseyPounds/stardew-checkup). Так же, помимо перевода, оно имеет расширенный функционал.

⚠️ This application is a translation of [the original application](https://github.com/MouseyPounds/stardew-checkup). Also, in addition to translation, it has advanced functionality.

## Про Stardew Checkup Ru

Данное приложение анализириует файлы сохранений [Stardew Valley](http://stardewvalley.net/) на прохождения различных достижений и этапов, и позволяет узнать, что вы пропустили. На данный момент оно проверяет прогресс 46 достижений, а так же прогресс выполнения других механик, включая Дедушкину оценку, улучшения Имбирного острова, Совершенство, и отношения.

Поддерживается большинство нового и изменённого контента из версии 1.6, но функции из 1.6 могут отображаться только в том случае, если обнаружено, что сохранение относится к этой версии. Если вы загрузили сохранение из 1.6, будьте готовы увидеть спойлеры. Для основного контента предусмотрена некоторая защита, такая как "Настройки вывода", чтобы скрыть результаты некоторых разделов, но заголовки новых разделов будут по-прежнему видны, а новые предметы всё ещё будут появляться в подробностях старых разделов.

Приложение написано на Javascript и использует [jQuery](https://jquery.com/), [emver-compare](https://github.com/substack/semver-compare) и [Javascript Cookie](https://github.com/js-cookie/js-cookie); оно расположено на GitHub Pages по ссылке https://vladislav117.github.io/StardewCheckupRu и исходный код репозитория расположен на https://github.com/Vladislav117/StardewCheckupRu.

Пожалуйста, отправляйте баги, предложения, и прочую обратную связь `@vladislav117` в Discord.

## Changelog

* 30 Mar  2024 - v5.0.2 - Finally added slightly more friendly error-handling
* 28 Mar  2024 - v5.0.1 - Remove monster who snuck into Social summary
* 19 Mar  2024 - v5.0   - Support for Stardew Valley 1.6
*  7 Jan  2021 - v4.0.3 - More Monster Hunting updates, added Special Orders tracking
*  3 Jan  2021 - v4.0.2 - Updated Monster Hunting counts, ignoring special furniture items in fishing, fix museum details
* 23 Dec  2020 - v4.0.1 - Fixed some multiplayer parsing bugs.
* 22 Dec  2020 - v4.0   - Output Preferences and initial support for Stardew Valley 1.5
* 24 Jul  2020 - v3.0.5 - Small bugfix on missable event check; updated forum link in footer
* 27 Dec  2019 - v3.0.4 - Fixed event ID for Maru's 14-heart (thanks SweetGarage) and another spelling error (thanks debashisbiswas)
*  7 Dec  2019 - v3.0.3 - Version detection changed again to handle semver like 1.4.2
*  1 Dec  2019 - v3.0.2 - Fixed bug in Joja development summary
* 30 Nov  2019 - v3.0.1 - Version detection should now properly identify day one 1.4 saves
* 26 Nov  2019 - v3.0   - Support for Stardew Valley 1.4
* 15 Aug  2019 - v2.5.1 - Fixed duplicate Social output; PR from debashisbiswas
* 22 June 2019 - v2.5   - Added Introductions quest summary to Social
* 22 Feb  2019 - v2.4.1 - Fixed bug with detecting valid farmhands on MP saves
* 30 Jan  2019 - v2.4   - Improved support for iOS save files
*  2 Jan  2019 - v2.3.2 - Multiplayer marriage detection in Grandpa's evaluation
*  1 Jan  2019 - v2.3.1 - Fixed bug with multiplayer processing introduced by last update
* 30 Dec  2018 - v2.3   - Improved handling of mod content for cooking & crafting summaries
*  3 Oct  2018 - v2.2.3 - Mark some Penny heart events impossible after Pam house; stardrop wording fix
*  7 Sept 2018 - v2.2.2 - Joja achievement no longer marked impossible unless CC is fully complete
*  1 Sept 2018 - v2.2.1 - Detect crafting recipes from mods; collapse older entries in changelog
* 29 Aug  2018 - v2.2   - Added the polyamory events to social summary & clarified multi-NPC events
* 20 Aug  2018 - v2.1.2 - Blobfish spelling fix and better input sanitization
* 12 Aug  2018 - v2.1.1 - Another bugfix for fish count (Pearls)
* 12 Aug  2018 - v2.1   - Individual player output can now be toggled on/off on multiplayer saves
* 11 Aug  2018 - v2.0.2 - Bugfix in fish count related to Secret Notes
* 25 June 2018 - v2.0.1 - Sanity-checking on cooking results and NPCs
*  6 June 2018 - v2.0   - Multiplayer support for all relevant sections
* 26 May  2018 - v1.9.7 - Secret Note reward bugfixes
* 24 May  2018 - v1.9.6 - Secret Note reward progress; favicon; change initial spouse friendship max to stardrop threshold
* 21 May  2018 - v1.9.5 - Work around multiplayer mine level weirdness; add "angry" status after confrontation event
* 14 May  2018 - v1.9.4 - Fix quest completion for SV 1.2 that got broken in last update
* 12 May  2018 - v1.9.3 - Fix quest completion to only look at host
* 10 May  2018 - v1.9.2 - Friendship status, including "guesses" for 1.2
*  4 May  2018 - v1.9.1 - Additional support for version 1.3 features (work in progress)
*  1 May  2018 - v1.9 - Basic support for version 1.3 (fix friendship parsing); new content support will come later
* 14 Apr  2018 - v1.8 - Rusty Key counter on museum summary and minor formatting changes
*  9 Mar  2018 - v1.7 - Added "heart events" to Social friendship summary
*  7 Feb  2018 - v1.6 - Wiki links for social summary and additional info on current skill level
* 29 Jan  2018 - v1.5 - Added full friendship point summary to Social section
* 10 Sept 2017 - v1.4 - Minor bugfixes
* 28 June 2017 - v1.3 - Added navigation links along right side (only visible after a save is loaded)
* 27 June 2017 - v1.2 - Community Center bundle & Joja Mart form progress
* 23 June 2017 - v1.1 - Added wiki links for needed item lists
* 22 June 2017 - v1.0 - Initial Release