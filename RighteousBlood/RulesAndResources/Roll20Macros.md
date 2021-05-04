---
title: Roll20 Macros
---

Dice pool rolls include Deep Penalties

# Roll
	Dice Pool: [[?{Dice Pool|1}]]
	/roll [[ (?{Dice Pool|1} + abs(?{Dice Pool|1})) / 2 ]]d10kh1 + [[ (abs([[ ((?{Dice Pool|1}-0.5) / abs(?{Dice Pool|1}-0.5)) - 1 ]]) / 2) * (abs(?{Dice Pool|1} - 2)) ]]d10kl1

# Turn Order Roll and Add to Tracker
- Token macro using a character attribute ("Speed") and a queried modifier
- Rolls 3 times and adds them as fractions to decrease player initiative collisions

<!-- -->

	Speed ([[ @{selected|Speed} ]]) + Modifier ([[ ?{Modifier|0} ]]) = Dice Pool ([[ @{selected|Speed}+?{Modifier} ]])
	/roll [[ ( (@{selected|Speed}+?{Modifier}) + abs(@{selected|Speed}+?{Modifier}) ) / 2 ]]d10kh1 + ([[ ( (@{selected|Speed}+?{Modifier}) + abs(@{selected|Speed}+?{Modifier}) ) / 2 ]]d10kh1)/100 + ([[ ( (@{selected|Speed}+?{Modifier}) + abs(@{selected|Speed}+?{Modifier}) ) / 2 ]]d10kh1)/10000 + [[ (abs([[ ((@{selected|Speed}+?{Modifier}-0.5) / abs(@{selected|Speed}+?{Modifier}-0.5)) - 1 ]]) / 2) * (abs(@{selected|Speed}+?{Modifier}-2)) ]]d10kl1 + [[ (abs([[ ((@{selected|Speed}+?{Modifier}-0.5) / abs(@{selected|Speed}+?{Modifier}-0.5)) - 1 ]]) / 2) * (abs(@{selected|Speed}+?{Modifier}-2)) ]]d10kl1/100 + [[ (abs([[ ((@{selected|Speed}+?{Modifier}-0.5) / abs(@{selected|Speed}+?{Modifier}-0.5)) - 1 ]]) / 2) * (abs(@{selected|Speed}+?{Modifier}-2)) ]]d10kl1/10000 &{tracker}
