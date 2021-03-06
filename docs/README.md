# BottingAtHome - Commands Documentation

## NEW: Slash Commands
### Certain commands can now be called with `/` rather than a prefix. This makes it a lot easier to see the syntax and available commands (just type `/` and a popup will appear with available commands). 

### General Format: `s!command $option(s)`
## `s!setprefix $prefix`
The default prefix for the bot is `s!`. Certain restrictions apply to the `$prefix` (regex: `/([a-zA-z])?[!\$&^|\*\?]$/gm`). Must have administrator role to use this.


## `s!scramble $event $num` *or* `/scramble $event $num`

Can also be called with `scr`, or just the event name (ie `s!3`). The code used to generate these scrambles is forked from CSTimer, and as such, most event scrambles supported there are supported in BottingAtHome.

### `$event`

The type of scramble. Can be any of the following: 

#### WCA Events
- **3**
- **2**
- **4**
- **5**
- **6**
- **7**
- **oh**
- **fmc**
- **pyra**
- **sq1**
- **clock**
- **megaminx**
- **skewb**
- **3bld**
- **4bld**
- **5bld**
- **mbld**

#### Non-WCA Events
- **fto**
- **lsll**
- **zbll**
- **cll**
- **edge**
- **corner**
- **eoline**
- **f2l**
- **ll**
- **lse**
- **zbls**
- **zzll**
- **ell**
- **cmll**
- **pll**
- **mpyr**

### `$num`

The number of scrambles. It is capped at 5 for all events except for mbld.

## `s!wca $wca_id` *or* `/wca $wca_id`

Get a basic overview of someone's WCA profile. `$wca_id` must be a valid WCA ID, ie) 2016MEUN01.

## `s!invite` *or* `/invite`

Sends you a dm with an link to add BottingAtHome to your own server.

## `s!help` *or* `/help`

Sends you a link to this page.

## `s!suggest $suggestions`

Send me a suggestion about how to improve BottingAtHome!

## `s!suggestions`

Sends a list of your current suggestions to BottingAtHome. Once they are either added or denied, your suggestion will be deleted from the list.

## `s!changes` *or* `/changes`

Sends a list of recent updates to BottingAtHome.

## `s!burger` *or* `/burger`

Burger. Yep.

## `s!leaderboard` *or* `s!burgertop` *or* `/leaderboard`

Top burgers. Yep.