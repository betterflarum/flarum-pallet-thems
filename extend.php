<?php

/**
 * Pallet theme for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    the-turk/flarum-pallet-theme
 * @author     Hasan Özbey <hasanoozbey@gmail.com>
 * @copyright  2020
 * @license    The MIT License
 * @version    Release: 0.1.0-beta.4
 * @link       https://github.com/the-turk/flarum-pallet-theme
 */

namespace TheTurk\Pallet;

use Flarum\Extend;
use Flarum\Foundation\Application;
use Flarum\Frontend\Assets;
use Flarum\Frontend\Compiler\Source\SourceCollector;
use TheTurk\Pallet;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Settings)
        ->serializeToForum('darkFlarum', 'theme_dark_mode'),
    (new Extend\Locales(__DIR__ . '/locale')),
    (new Extend\ServiceProvider())
        ->register(Providers\AssetProvider::class),
];
