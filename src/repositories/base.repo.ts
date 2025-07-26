import { useApiClient } from "@/utils/api.util";
import notification from "@/utils/notification.util.tsx";

class BaseRepo {
  protected client = useApiClient();

  public notifySuccess(message: string, duration = 4000) {
    notification.success(message, undefined, duration);
  }

  public notifyError(message: string) {
    notification.error(message);
  }

  public async delete(url: string) {
    return this.client.delete(url);
  }
}

export default BaseRepo;
