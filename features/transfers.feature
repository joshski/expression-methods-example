Feature: Transfers

  Scenario: Successful transfer
    Given John has a balance of 200.00 GBP
    And Jane has a balance of 100.00 GBP
    When John transfers 50.00 GBP to Jane
    Then John's balance is now 150.00 GBP
    And Jane's balance is now 150.00 GBP
