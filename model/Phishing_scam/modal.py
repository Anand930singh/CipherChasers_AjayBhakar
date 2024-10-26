# Import necessary libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
file_path = "C:/Users/HP/Desktop/Hack2Future/model/Phishing_scam/phishing_scams.csv"
data = pd.read_csv(file_path)

# Display column names to verify structure
print(data.columns)

# Set a consistent plot style
sns.set(style="whitegrid")

# 1. Distribution of Etherscan Tags (Top 10)
plt.figure(figsize=(12, 6))
sns.countplot(data=data, y='etherscan_tag', 
              order=data['etherscan_tag'].value_counts().index[:10], palette='coolwarm')
plt.title('Top 10 Etherscan Tags', fontsize=16)
plt.xlabel('Count', fontsize=12)
plt.ylabel('Etherscan Tag', fontsize=12)
plt.show()

# 2. Distribution of Etherscan Labels
plt.figure(figsize=(10, 5))
sns.countplot(data=data, y='etherscan_labels', 
              order=data['etherscan_labels'].value_counts().index, palette='viridis')
plt.title('Distribution of Etherscan Labels', fontsize=16)
plt.xlabel('Count', fontsize=12)
plt.ylabel('Etherscan Label', fontsize=12)
plt.show()

# 3. Proportion of Contracts vs Non-Contracts
plt.figure(figsize=(8, 5))
data['is_contract'] = data['is_contract'].map({True: 'Contract', False: 'Not a Contract'})
sns.countplot(data=data, x='is_contract', palette='cubehelix')
plt.title('Proportion of Contracts vs Non-Contracts', fontsize=16)
plt.xlabel('Type', fontsize=12)
plt.ylabel('Count', fontsize=12)
plt.show()

# 4. Top 10 Addresses by Etherscan Tag Frequency
top_addresses = data['address'].value_counts().head(10)
plt.figure(figsize=(10, 5))
top_addresses.plot(kind='barh', color='coral')
plt.title('Top 10 Addresses by Etherscan Tag Frequency', fontsize=16)
plt.xlabel('Number of Occurrences', fontsize=12)
plt.ylabel('Address', fontsize=12)
plt.show()

# 5. Pie Chart: Proportion of Etherscan Labels (Phish vs Others)
phish_vs_others = data['etherscan_labels'].apply(lambda x: 'Phish-Hack' if 'phish' in x else 'Other')
label_counts = phish_vs_others.value_counts()
plt.figure(figsize=(8, 8))
label_counts.plot(kind='pie', autopct='%1.1f%%', startangle=140, cmap='tab20')
plt.title('Proportion of Phish-Hack vs Other Labels', fontsize=16)
plt.ylabel('')  # Hide y-label for clarity
plt.show()
