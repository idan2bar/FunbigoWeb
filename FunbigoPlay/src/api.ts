
export type ProjectData = {
    Id: string;
    Name: string;
    IconId: string;
    MetaData: {
        shortDescription: string;
    };
};

const API_BASE_URL = 'https://api.funbigo.com';
const ASSET_ENDPOINT = `${API_BASE_URL}/asset`;
const ASSET_DOWNLOAD_ENDPOINT = `${API_BASE_URL}/asset/download`;

export async function getProjectData(projectId: string): Promise<ProjectData | null> {
    const response: Response = await fetch( `${ASSET_ENDPOINT}/${projectId}`);

    if (response.ok) {
        return response.json();
    }
    
    console.error(`Failed to fetch project data: ${response.statusText}`);
    return null;
}

export function getFunbigoFileUrl(fileId: string): string {
    return `${ASSET_DOWNLOAD_ENDPOINT}/${fileId}`;
}