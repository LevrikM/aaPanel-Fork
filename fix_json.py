import os
import json

def update_menu():
    path = 'c:/Users/misha/Desktop/aaPanel-Fork/config/menu.json'
    try:
        with open(path, 'r', encoding='utf-8') as f:
            menu = json.load(f)
        
        # Remove Account item
        menu = [item for item in menu if item.get('title') != 'Account']
        
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(menu, f, indent=4, ensure_ascii=False)
        print("Updated menu.json")
    except Exception as e:
        print("Error updating menu.json:", e)

def update_lang_files():
    base_dir = 'c:/Users/misha/Desktop/aaPanel-Fork/BTPanel/static/vite/lang'
    count = 0
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.json'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if 'aaPanel' in content or 'aapanel' in content or 'AAPANEL' in content:
                        import re
                        new_content = re.sub(r'(?i)aaPanel', 'HomeServer Panel', content)
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    print(f"Updated {count} lang JSON files")

update_menu()
update_lang_files()
