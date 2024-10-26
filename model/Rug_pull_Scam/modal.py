# Import necessary libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
df = pd.read_csv('C:/Users/HP/Desktop/Hack2Future/model/Rug_pull_Scam/Rug_pull_dataset.csv') 
# Data Cleaning
df['Amount Stolen'] = df['Amount Stolen'].replace('[\\$,]', '', regex=True).astype(float)
df['Year'] = pd.to_datetime(df['Date'], errors='coerce').dt.year

# 1. Total Losses by Incident Type
plt.figure(figsize=(8, 5))
incident_type_loss = df.groupby('Rug Pull vs Scam')['Amount Stolen'].sum()
incident_type_loss.plot(kind='bar', color=['#ff9999', '#66b3ff'])
plt.title('Total Amount Stolen by Incident Type')
plt.ylabel('Total Amount Stolen (USD)')
plt.xlabel('Incident Type')
plt.xticks(rotation=0)
plt.show()

# 2. Number of Incidents per Year
plt.figure(figsize=(10, 6))
yearly_incidents = df.groupby('Year').size()
sns.lineplot(x=yearly_incidents.index, y=yearly_incidents.values, marker="o", color="purple")
plt.title('Number of Incidents per Year')
plt.ylabel('Number of Incidents')
plt.xlabel('Year')
plt.grid(True)
plt.show()

# 3. Total Losses in Crypto vs. NFT
plt.figure(figsize=(8, 5))
crypto_nft_loss = df.groupby('Crypto vs NFT')['Amount Stolen'].sum()
crypto_nft_loss.plot(kind='bar', color=['#c2c2f0', '#ffb3e6'])
plt.title('Total Amount Stolen by Crypto vs NFT')
plt.ylabel('Total Amount Stolen (USD)')
plt.xlabel('Market Segment')
plt.xticks(rotation=0)
plt.show()

# 4. Rug Pulls vs Scams Over Time
plt.figure(figsize=(10, 6))
rug_pull_scam_yearly = df.groupby(['Year', 'Rug Pull vs Scam']).size().unstack().fillna(0)
rug_pull_scam_yearly.plot(kind='line', marker='o', colormap='coolwarm')
plt.title('Rug Pulls vs Scams Over Time')
plt.ylabel('Number of Incidents')
plt.xlabel('Year')
plt.grid(True)
plt.show()

# 5. Distribution of Amount Stolen
plt.figure(figsize=(10, 6))
sns.histplot(df['Amount Stolen'], bins=30, kde=True, color="coral")
plt.title('Distribution of Amount Stolen')
plt.xlabel('Amount Stolen (USD)')
plt.ylabel('Frequency')
plt.show()
