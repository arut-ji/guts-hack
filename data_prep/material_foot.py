import pandas as pd

raw = pd.read_csv('mat_foot.csv')
raw = raw[raw['Year'] == 2010]
raw = raw.sort_values(by=['TonsPerPerson'])

uk = raw[raw['Code'] == 'GBR'] # = 19.37
raw = raw[raw['TonsPerPerson'] < 19.37]
raw['TonsPerPerson'] -= 19.37
raw['KiloPerWeek'] = raw['TonsPerPerson']/365*7*1000

print(uk)
print(raw)

raw.to_csv('./out_mat_foot.csv');
