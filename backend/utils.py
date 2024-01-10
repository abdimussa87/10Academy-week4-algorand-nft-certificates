import requests
from PIL import Image
from io import BytesIO
import uuid
import os

def save_image_from_url(url, output_folder_name):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            image = Image.open(BytesIO(response.content))
            output_folder_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),output_folder_name)
            if not os.path.exists(output_folder_path):
                os.makedirs(output_folder_path)  # Create the directory if it doesn't exist
            file_name = str(uuid.uuid4()) + '.jpg'  # Create a random file name
            file_path = os.path.join(output_folder_path, file_name)
            image.save(file_path)
            print(f"Image saved as {file_path}")
        else:
            print("Failed to download the image.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

# Example usage:
if __name__ == '__main__':        

    image_url = 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-57DHbubaUsKcpEwBCHTVrS6b/user-ZPTxrE5Z3of20YjzdGT5LsFj/img-xfHHE1MFN24dOej0fMSWo9ul.png?st=2024-01-10T07%3A11%3A56Z&se=2024-01-10T09%3A11%3A56Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-10T02%3A18%3A12Z&ske=2024-01-11T02%3A18%3A12Z&sks=b&skv=2021-08-06&sig=G3hYrhXaJiw2KCAV6qnWaJwYS9ySB5lTF/GzMb6uHss%3D'
    output_folder_name = 'certificate_base_image_variations'  

    save_image_from_url(image_url, output_folder_name)
