import requests

url = "https://jse-tracker.herokuapp.com/api/v1"


class Stocks:
    """
   The JSE class has two methods

   1. get_all
        :param: takes no parameter
        :return: all stocks in json format

   2. get
       :param: takes a list of stocks as a parameter
       :return: all stocks from the give in the list in json format

   """

    def __init__(self):
        pass

    def get_all(self):
        """
        :params: takes no parameter
        :return: all stocks
        """
        return requests.get(url).json()

    def get(self, stock):
        """
        :param: takes a list of stocks as a parameter
        :return: all stocks from the give in the list in json format
        """
        return requests.get("{}/{}".format(url, stock)).json()
