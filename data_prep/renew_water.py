import pandas as pd

raw = pd.read_csv('renew_water.csv')
raw = raw.sort_values(by=['CubicPerPerson'])

uk = raw[raw['Entity'] == 'Western Europe'] # = 4006
raw = raw[raw['CubicPerPerson'] >= 4006]
raw['CubicPerPerson'] = raw['CubicPerPerson'] - 4006 
raw['CubicPerWeek'] = raw['CubicPerPerson']/365*7

print(uk)
print(raw)

raw.to_csv('./out_renew_water.csv');
