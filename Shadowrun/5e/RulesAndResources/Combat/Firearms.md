---
title: Firearms
layout: default_old
---

## Firing Modes

- Firearms come in a variety of firing modes which are listed on the weapon’s stat block
- If a weapon has more than one firing mode, switching between modes is a simple action or a free action if the weapon is wirelessly active and the shooter has a DNI
- The different firing modes are listed below along with the actions available when firing in each mode

### Single Shot
- Simple action - Fires a single round

### Semi-automatic
- Simple action - Fires a single round
- Complex action - Semi-automatic Burst: Fires 3 rounds, -2 penalty to dodge
- Complex action - Double tap: Fires 2 rounds, no penalty to dodge, +1DV

### Burst Fire
- Simple action - Fires 3 rounds, -2 penalty to dodge
- Complex action - Long burst: Fires 6 rounds, -5 penalty to dodge
- Complex action - Aimed burst: Fires 3 rounds, no penalty to dodge, +1 DV

### Fully automatic
- Simple action - Fires 6 rounds, -5 penalty to dodge
- Complex action - Fires 10 rounds, -9 penalty to dodge
- Complex action - Brain Blaster: Fires 6 rounds, +2 DV


## Suppressing Fire
- Takes a complex action
- Uses 20 rounds of ammunition
- Suppress a cone area at a distance of the shooters choice up to the range of the weapon
- The cone is 10m wide and 2m high at its end
- Make a (Weapon Skill) + AGI [Acc] test and record the hits
- Suppressive fire lasts until the end of the combat turn as long as the firer does not move or make another action
- Anyone in or immediately adjacent to the zone takes a dice pool penalty to all actions equal to the shooter’s hits (unless they are completely unaware of the suppression)
- Any character in the suppressed area who is not prone or behind cover must make a REA + EDG (+Full defence if they choose) test with a threshold equal to the shooter’s hits.  If they fail they are hit and take the base DV of the weapon/ammunition
- Characters may spend their free action to go prone and avoid making the roll
- Characters with no available free action may use the [Hit the Dirt](InterruptActions.md) interrupt action if they have the initiative to spend
- If multiple suppressive fire actions overlap only the highest dice pool penalty counts but REA + EDG tests must be made against all overlapping zones.  These tests are subject to the -1 penalty for each subsequent defence

### Enhanced Suppression
- Complex action
- This narrows the area of suppression but increases it vertically
- The cone width is reduced to 5m across at the far end
- Characters within this zone may not use the Drop Prone free action to avoid the fire
- They may still use the Lucky Cover Edge action to avoid the roll

### Flechette Suppression
- May only be performed with weapons firing flechette ammunition
- Prevent targets from using the drop prone action to avoid being hit
- Effects are dependent on the choke setting of the weapon
- Narrow choke confers the effects of enhanced suppression

### Medium choke

| Range   | DV  | ACC | Defence | Extra width |
| ------- |:---:|:---:|:-------:|:-----------:|
| Short   | -1  |  -  |   -3    |     4m      |
| Medium  | -3  |  -  |   -3    |     8m      |
| Long    | -5  | -1  |   -3    |     12m     |
| Extreme | -7  | -1  |   -3    |     16m     |

### Wide choke

| Range   | DV  | ACC | Defence | Extra width |
| ------- |:---:|:---:|:-------:|:-----------:|
| Short   | -3  |  -  |   -5    |     6m      |
| Medium  | -5  |  -  |   -5    |     12m     |
| Long    | -7  | -1  |   -5    |     18m     |
| Extreme | -9  | -1  |   -5    |     24m     |

## Shotguns
- Flechette ammunition fired by shotguns has a spread
- The spread is controlled by the choke
- Changing the choke setting is a simple action, or a free action on a smartlinked weapon
- At medium and wide choke settings multiple targets within a specified spread can be targeted with the same attack roll without splitting the dice pool
- Called shots cannot be made with weapons set to medium or wide choke

### Narrow Choke
- Target receives a -1 penalty to defence tests at all ranges

### Medium Choke

| Range   | DV  | ACC | Defence | Spread | Number of Targets |
| ------- |:---:|:---:|:-------:|:------:|:-----------------:|
| Short   | -1  |  -  |   -3    |   2m   |         2         |
| Medium  | -3  |  -  |   -3    |   4m   |         3         |
| Long    | -5  | -1  |   -3    |   6m   |         4         |
| Extreme | -7  | -1  |   -3    |   8m   |         6         |

### Wide Choke

| Range   | DV  | ACC | Defence | Spread | Number of Targets |
| ------- |:---:|:---:|:-------:|:------:|:-----------------:|
| Short   | -3  |  -  |   -5    |   3m   |         2         |
| Medium  | -5  |  -  |    5    |   6m   |         3         |
| Long    | -7  | -1  |   -5    |   9m   |         4         |
| Extreme | -9  | -1  |   -5    |  12m   |         6         |

## Recoil
- All firearms exert recoil on the shooter
- If a shooter is wielding two firearms at the same time the recoil is combined
- Recoil compensation helps to control the first few shots the weapon fires
- Recoil compensation = 1 + STR/3(Rounded up) + RC of the weapon
- Recoil is equal to the number of bullets fired and is cumulative across every action phase and combat turn until the shooter takes a simple or complex action that does not involve shooting.  This resets the characters recoil to zero
- Recoil is cumulative to the shooter, not the weapon being fired
- Single Shot weapons do not exert cumulative recoil

- Once the cumulative recoil exceeds the characters recoil compensation the excess recoil is applied as a penalty to the characters dice pool for attacks made with firearms

- Vehicle and drone mounted weapons have recoil compensation equal to the body of the vehicle + RC of the weapon

## Reloading

| Reloading Method      | Result                           | Action  |
| --------------------- | -------------------------------- |:-------:|
| Removable clip (c)    | Remove or insert clip            | Simple  |
| Speed loader          | Completely load revolver         | Complex |
| Fill clip             | Insert AGI rounds into weapon    | Complex |
| Break action (b)      | Insert 2 rounds                  | Complex |
| Belt fed (belt)       | Remove or insert belt            | Complex |
| Fill belt/drum        | Insert AGI rounds into belt/drum | Complex |
| Internal magazine (m) | Insert AGI rounds                | Complex |
| Muzzle loading (ml)   | Load 1 muzzle tube               | Complex |
| Cylinder (cy)         | Insert AGI rounds                | Complex |
| Drum (d)              | Remove or insert drum            | Complex |

## Ranges

| Weapon              | Short +0 | Medium -1 | Long -3 | Extreme -6 |
| ------------------- |:--------:|:---------:|:-------:|:----------:|
| Taser               |   0-5    |   6-10    |  11-15  |   16-20    |
| Holdout pistol      |   0-5    |   6-15    |  16-30  |   31-50    |
| Light pistol        |   0-5    |   6-15    |  16-30  |   31-50    |
| Heavy pistol        |   0-5    |   6-20    |  21-40  |   41-60    |
| Machine pistol      |   0-5    |   6-15    |  16-30  |   31-50    |
| SMG                 |   0-10   |   11-40   |  41-80  |   81-150   |
| Assault Rifle       |   0-25   |  26-150   | 151-350 |  351-550   |
| Shotgun (f)         |   0-15   |   16-30   |  31-45  |   45-60    |
| Shotgun (slug)      |   0-10   |   11-40   |  41-80  |   81-150   |
| Sniper rifle        |   0-50   |  51-350   | 351-800 |  801-1500  |
| LMG                 |   0-25   |  26-300   | 201-400 |  401-800   |
| MMG/HMG             |   0-40   |  41-250   | 251-750 |  751-1200  |
| Assault cannon      |   0-50   |  51-300   | 301-750 |  751-1500  |
| Grenade launcher    |   5-50   |  51-100   | 101-150 |  151-500   |
| Missile launcher    |  20-70   |  71-150   | 151-450 |  451-1500  |
| Bow                 |  0-STR   |  STR x10  | STR x30 |  STR x60   |
| Light crossbow      |   0-6    |   7-24    |  25-60  |   61-120   |
| Medium crossbow     |   0-9    |   10-36   |  37-90  |   91-150   |
| Heavy crossbow      |   0-15   |   16-45   | 46-120  |  121-180   |
| Thrown knife        |  0-STR   |  STR x2   | STR x3  |   STR x5   |
| Shuriken            |  0-STR   |  STR x2   | STR x5  |   STR x7   |
| Standard grenade    | 0-STR x2 |  STR x4   | STR x6  |  STR x10   |
| Aerodynamic grenade | 0-STR x2 |  STR x4   | STR x8  |  STR x15   |

## Quick Draw

- A character may attempt to quick draw a pistol sized weapon or small throwing weapon
- Make a Weapon skill + REA [Physical] (3) test
- On success the character draws the weapon and fires it with a simple action
- On a failure the weapon is drawn but cannot be fired in the same action
- On a glitch the weapon is not drawn or is dropped and no further actions can be taken
- On a critical glitch the weapon might be accidentally discharged or dropped out of reach

- Only properly holstered weapons can be quick drawn
- Two weapons may be quick drawn simultaneously but the dice pool is split
